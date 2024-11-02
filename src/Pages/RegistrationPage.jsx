import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, Alert, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function RegistrationPage() {
  const [formData, setFormData] = useState({
    shopName: "",
    bordSize: "",
    lapuNumber: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
    mobile: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      const response = await axios.post(
        "https://airtel-project-backend.vercel.app/api/register",
        formData
      );
      if (response.data.success) {
        setSuccess("Registration successful!");
        setError("");
        setTimeout(() => navigate("/"), 2000); // Navigate after a short delay
      } else {
        setError(response.data.message || "Error registering user.");
      }
    } catch (error) {
      setError("Failed to register user.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <Title level={2} className="text-center mb-4">
          Register
        </Title>

        <Form layout="vertical" onFinish={handleSubmit}>
          {Object.keys(formData).map((field) => (
            <Form.Item
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              rules={[{ required: true, message: `Please enter ${field}` }]}
            >
              <Input
                placeholder={`Enter ${field}`}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </Form.Item>
          ))}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Register
            </Button>
          </Form.Item>

          {error && <Alert message={error} type="error" showIcon />}
          {success && <Alert message={success} type="success" showIcon />}
        </Form>
      </Card>
    </div>
  );
}

export default RegistrationPage;
