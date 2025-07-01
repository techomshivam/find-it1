import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const ReportLostItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!itemName || !description || !location || !contact) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'lostItems'), {
        itemName,
        description,
        location,
        contact,
        reportedAt: Timestamp.now(),
      });
      alert('Lost item reported!');
      setItemName('');
      setDescription('');
      setLocation('');
      setContact('');
    } catch (err: any) {
      alert('Error reporting item: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-4 text-center">Report Lost Item</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Location Lost"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Contact Info (email or phone)"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full border px-4 py-2 rounded"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {loading ? 'Submitting...' : 'Submit Report'}
        </button>
      </div>
    </div>
  );
};

export default ReportLostItemForm;
