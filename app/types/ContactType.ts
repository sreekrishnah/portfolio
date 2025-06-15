export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  export interface ContactConfig {
    title: string;
    description: string;
    emailSection: {
      title: string;
      email: string;
    };
    accessKey: string;
    apiUrl: string;
  }
  
  export interface FormSubmissionResponse {
    success: boolean;
    message?: string;
  }