/*import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

interface RegisterData {
    firstname:string;
    lastname:string;

  email: string;
  mobile:number;
  password: string;
  // Add other required fields
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/user/register`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};  */

// services/api.ts

export interface RegisterUserParams {
    firstname:string;
    lastname:string;

  email: string;
  mobile:number;
  password: string;
  }
  
  export async function registerUser(params: RegisterUserParams) {
    const response = await fetch('http://localhost:5000/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to register user');
    }
  
    return response.json();
  }
  

  /* 

  const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await registerUser(data);
      console.log("User registered successfully:", response);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle registration error (e.g., show error message)
    }
  };
  
  */