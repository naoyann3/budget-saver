import { TextField, Button, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function InputForm() {
  const [form, setForm] = useState({
    communication: '',
    insurance: '',
    family: '夫婦二人',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'expenses'), {
        communication: Number(form.communication),
        insurance: Number(form.insurance),
        family: form.family,
      });
      console.log('保存成功:', form);
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="通信費（円）"
        name="communication"
        type="number"
        value={form.communication}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="保険料（円）"
        name="insurance"
        type="number"
        value={form.communication}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Select
        name="family"
        value={form.family}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="夫婦二人">夫婦二人</MenuItem>
        <MenuItem value="単身">単身</MenuItem>
      </Select>
      <Button onClick={handleSubmit} variant="contained" style={{ marginTop: 20 }}>
        分析
      </Button>
    </div>
  );
}
export default InputForm;