import bcrypt from 'bcrypt';
import kv from '../../utils/kv';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Retrieve the hashed password
  const storedHash = await kv.get(`user:${email}`);

  if (!storedHash) {
    return res.status(401).send({ error: 'Invalid credentials' });
  }

  // Compare the provided password with the stored hash
  const match = await bcrypt.compare(password, storedHash);
  if (match) {
    // Authentication successful
    return res.status(200).send({ success: true });
  } else {
    // Authentication failed
    return res.status(401).send({ error: 'Invalid credentials' });
  }
}
