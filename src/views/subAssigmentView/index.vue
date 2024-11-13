<template>
  <div class="content">
    <div class="snow" v-if="isThree" ref="snowflakeRef"></div>
    <div class="selectCourse">
      <div class="cat">
        <smallCat message="喵~" />
      </div>
      <div class="title">选择作业</div>
      <div class="leftselect">
        <el-select
          v-model="assignmentId"
          placeholder="选择作业"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          />
        </el-select>
        <div class="assignmentNum" v-if="unsubmittedCount">
          你还有{{ unsubmittedCount }}个作业未提交
        </div>
        <div class="assignmentNum" v-else>你已提交全部作业</div>
      </div>
    </div>

    <div class="subArea">
      <div class="title">提交作业</div>
      <div class="assignmentArea">
        <div class="leftAssignment">
          <div style="min-height: 200px">
            {{ selectedAssignment.description }}
          </div>
          <el-upload
            :action="uploadUrl"
            :data="uploadData"
            :before-upload="beforeUpload"
            :on-success="handleUploadSuccess"
            :on-error="handleUploadError"
            :show-file-list="false"
            name="file"
          >
            <el-button
              type="primary"
              :disabled="selectedAssignment.status != '未提交'"
              >提交作业</el-button
            >
          </el-upload>
        </div>
        <div class="rightAssignment">
          <div>截止日期：{{ selectedAssignment.due_date }}</div>
          <div style="margin-bottom: 20px">
            作业状态:{{ selectedAssignment.status }}
          </div>
          <div>作业评价:{{ selectedAssignment.feedback }}</div>
        </div>
      </div>
      <div class="damoArea">
        <el-tooltip effect="light" :content="blessing" placement="right-start">
          <moneyDamo v-if="damoRandNum == 0" />
          <peachFlowerDamo v-if="damoRandNum == 1" />
          <pickPeopleDamo v-if="damoRandNum == 2" />
          <safeDamo v-if="damoRandNum == 3" />
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import smallCat from "@/components/SmallCat/index.vue";
import moneyDamo from "@/components/luckDamo/money.vue";
import peachFlowerDamo from "@/components/luckDamo/peachFlower.vue";
import pickPeopleDamo from "@/components/luckDamo/pickPeople.vue";
import safeDamo from "@/components/luckDamo/safe.vue";
import { ref, watch, nextTick } from "vue";
import { ElMessage } from "element-plus";
import { getAssignmentsByStudent } from "@/api/modules/sutdent";
import { onMounted } from "vue";
import {
  blessSafeArr,
  wealthBlessings,
  peachBlossomBlessings,
  relationshipBlessings,
} from "./blessArr";
import initSnowflake from "./threeInit/initSnowflake";
const assignmentId = ref("");
const options = ref([]);
const unsubmittedCount = ref(0); //未提交的作业个数
const getAssignmentsByStudentReq = async (studentId: any) => {
  let res: any = await getAssignmentsByStudent(studentId);
  if (res.code == 200) {
    options.value = res.data;
    if (options.value.length) {
      assignmentId.value = options.value[0].id;
      unsubmittedCount.value = options.value.filter(
        (item) => item.status === "未提交"
      ).length;
    }
  } else {
    ElMessage.error("获取作业出错，请联系颖姐查看原因，或刷新重试");
  }
};

// 上传前检查文件格式和大小
const beforeUpload = (file) => {
  // const isExcel =
  //   file.type ===
  //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  // if (!isExcel) {
  //   ElMessage.error("请上传 Excel 文件（xlsx 格式）");
  // }
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    ElMessage.error("上传文件大小不能超过 10MB");
  }
  return isLt2M;
};

const handleUploadSuccess = (response) => {
  if (response && response.message) {
    ElMessage.success(response.message);
  } else {
    ElMessage.success("作业提交成功");
    getAssignmentsByStudentReq(studentInfo.value.student_id);
  }
};
const handleUploadError = (error) => {
  ElMessage.error("作业提交失败，请检查后端接口或网络设置");
  console.error(error);
};

const selectedAssignment = ref({
  description: null,
  due_date: null,
  status: "",
  feedback: "",
}); // 存储对应的作业对象
const uploadUrl = ref(""); //上传地址带作业id
watch(assignmentId, (newId) => {
  uploadUrl.value = `http://localhost:3000/api/assignment/${assignmentId.value}/submit`;
  selectedAssignment.value =
    options.value.find((item) => item.id === newId) || null;
});

const damoRandNum = ref(0); //随机达摩
const blessing = ref(""); //
const randomDamoFun = () => {
  damoRandNum.value = Math.floor(Math.random() * 4);
  if (damoRandNum.value == 0) {
    blessing.value = wealthBlessings[Math.floor(Math.random() * 10)];
  } else if (damoRandNum.value == 1) {
    blessing.value = peachBlossomBlessings[Math.floor(Math.random() * 10)];
  } else if (damoRandNum.value == 2) {
    blessing.value = relationshipBlessings[Math.floor(Math.random() * 10)];
  } else {
    blessing.value = blessSafeArr[Math.floor(Math.random() * 10)];
  }
};

const isThree = ref(false);

watch(isThree, async () => {
  if (isThree.value) {
    await nextTick(); // 等待 DOM 更新
    initSnowflake(snowflakeRef);
  }
});
const uploadData = ref({}); //上传参数带学生id
const studentInfo = ref({ student_id: null });
const snowflakeRef = ref();

onMounted(() => {
  let isThreeStr = localStorage.getItem("isThree");
  isThree.value = isThreeStr ? isThreeStr === "true" : false; // 如果没有值，默认为 false
  randomDamoFun();
  studentInfo.value = JSON.parse(localStorage.getItem("studentInfo"));
  uploadData.value = { studentId: studentInfo.value.student_id };
  getAssignmentsByStudentReq(studentInfo.value.student_id);
});
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  padding-top: 40px;
  .snow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .selectCourse {
    width: 80%;
    margin-left: 10%;
    height: 200px;
    padding: 30px 50px;
    background-color: #d3e0ff;
    border-radius: 10px;
    box-shadow: 0 10px 30px #00000020;
    position: relative;

    .cat {
      position: absolute;
      left: 0;
      top: -50px;
    }

    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
      background: linear-gradient(130deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      width: 120px;
      -webkit-text-fill-color: transparent;
    }

    .leftselect {
      display: flex;
      align-items: center;

      .assignmentNum {
        margin-left: 100px;
      }
    }
  }

  .subArea {
    margin-top: 40px;
    width: 80%;
    margin-left: 10%;
    min-height: 400px;
    padding: 30px 50px;
    background-color: #d3e0ff;
    border-radius: 10px;
    box-shadow: 0 10px 30px #00000020;
    position: relative;

    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
      background: linear-gradient(130deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      width: 120px;
      -webkit-text-fill-color: transparent;
    }

    .assignmentArea {
      display: flex;
      justify-content: space-between;

      .leftAssignment {
        min-height: 200px;
        width: 45%;
      }

      .rightAssignment {
        min-height: 200px;
        width: 45%;
      }
    }

    .damoArea {
      position: absolute;
      right: 0;
      bottom: -50px;
      transform: scale(0.5);
    }
  }
}
</style>
