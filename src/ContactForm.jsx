import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required.";
    tempErrors.email = formData.email ? (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Invalid email.") : "Email is required.";
    tempErrors.message = formData.message ? "" : "Message is required.";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted!');
      // clear form
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-form py-12 px-4 max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-4xl font-semibold text-center border-b-2 border-b-black inline-block pb-2 mb-8">
        Contact Form
      </h3>

      <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
        
        {/* Name */}
        <div className="flex items-center gap-2">
          <PersonIcon className="text-blue-600" />
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <EmailIcon className="text-blue-600" />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </div>

        {/* Message */}
        <div className="flex items-start gap-2">
          <MessageIcon className="text-blue-600 mt-3" />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
            helperText={errors.message}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            size="large"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
