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
    <div className="p-4">
      <h1 className="text-3xl mb-4">Contract with {contractData.tenantName}</h1>
      <div className="mb-4">
        <label className="block mb-2">Termination Reason:</label>
        <Textarea name="cReason" value={contractData.cReason} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Penalty:</label>
        <Input name="cutP" value={contractData.cutP} onChange={handleChange} disabled />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Termination Date:</label>
        <Input type="date" name="start_date" value={contractData.start_date} onChange={handleChange} />
      </div>
      <Button onClick={updateContractData}>Update Contract</Button>
    </div>
  );
};

export default Index;