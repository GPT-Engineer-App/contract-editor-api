import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [contractData, setContractData] = useState({
    start_date: '',
    cReason: '',
    tenantName: '',
    cutP: ''
  });

  useEffect(() => {
    fetchContractData();
  }, []);

  const fetchContractData = async () => {
    try {
      const response = await fetch('http://localhost:8080/contract/createContract');
      const data = await response.json();
      setContractData(data);
    } catch (error) {
      console.error('Error fetching contract data:', error);
      toast.error('Failed to fetch contract data');
    }
  };

  const updateContractData = async () => {
    try {
      const response = await fetch('http://localhost:8080/contract/createContract', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contractData)
      });
      if (response.ok) {
        toast.success('Contract updated successfully');
      } else {
        console.error('Error updating contract data:', response.statusText);
        toast.error('Failed to update contract data');
      }
    } catch (error) {
      console.error('Error updating contract data:', error);
      toast.error('Failed to update contract data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContractData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contract-container p-4">
      <h1 className="text-3xl mb-4">Contract with {contractData.tenantName}</h1>
      <div className="contract-section mb-4">
        <h2 className="section-title">Termination Reason:</h2>
        <Textarea name="cReason" value={contractData.cReason} onChange={handleChange} />
      </div>
      <div className="contract-section mb-4">
        <h2 className="section-title">Penalty:</h2>
        <Input name="cutP" value={contractData.cutP} onChange={handleChange} disabled />
      </div>
      <div className="contract-section mb-4">
        <h2 className="section-title">Termination Date:</h2>
        <Input type="date" name="start_date" value={contractData.start_date} onChange={handleChange} />
      </div>
      <Button onClick={updateContractData}>Update Contract</Button>
    </div>
  );
};

export default Index;

<style jsx>{`
  .contract-container {
    font-family: 'Times New Roman', Times, serif;
    color: #333;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 800px;
    margin: 0 auto;
  }

  .contract-section {
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 1.2em;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .contract-container h1 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
  }

  .contract-container label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .contract-container input,
  .contract-container textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .contract-container button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .contract-container button:hover {
    background-color: #0056b3;
  }
`}</style>