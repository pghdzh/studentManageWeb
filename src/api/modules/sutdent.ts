import http from "../axios";

// 定义上传学生 Excel 的函数
export const uploadStudents = (
  courseId: string,
  formData: FormData
): Promise<any> => {
  return http.post(
    `/api/courseStudent/courses/${courseId}/import-students`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

export const getAssignmentsByStudent = (studentId: any) => {
  return http.get(`/api/assignment/student/${studentId}/all-assignments`);
};

export const login = (params: any) => {
  return http.post("/api/student/login", params);
};

export const editPass = (studentId: any, params: any) => {
  return http.put(`/api/student/editPass/${studentId}`, params);
};
