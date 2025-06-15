import { ContactFormData, FormSubmissionResponse } from '@/app/types/ContactType';
import { contactConfig } from './ContactConfig';

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const submissionData = {
      ...formData,
      access_key: contactConfig.accessKey,
    };

    const response = await fetch(contactConfig.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(submissionData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: FormSubmissionResponse = await response.json();
    return result.success;

  } catch (error) {
    console.error('Form submission error:', error);
    return false;
  }
};