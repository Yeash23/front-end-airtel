import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Typography, Card, Spin, Alert } from "antd"; // Import required AntD components
import Navbar from "../Components/Navbar";

const { Title } = Typography;

const Dashboard = () => {
  const [data, setData] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getAllData"
        );
        setData(response.data.users); // Adjust according to your API response structure
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array means this runs once on mount

  // Define columns for the AntD Table
  const columns = [
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "shopName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Bord Size",
      dataIndex: "bordSize",
      key: "bordSize",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Pin Code",
      dataIndex: "pinCode",
      key: "pinCode",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "LAPU Number",
      dataIndex: "lapuNumber",
      key: "lapuNumber",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => new Date(text).toLocaleString(), // Format date for better readability
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" /> {/* AntD loading spinner */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Alert message={error} type="error" showIcon />{" "}
        {/* AntD alert for error */}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: "24px" }}>
        <Card>
          <Title level={2}>Dashboard Data</Title>
          <Table
            bordered
            dataSource={data}
            columns={columns}
            rowKey="_id" // Use a unique identifier for each row if available
          />
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
