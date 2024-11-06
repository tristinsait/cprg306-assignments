import { useRouter } from 'next/router';
import { useUserAuth } from '../_utils/auth-context';

const Profile = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    router.push('/landing');
    return null;
  }

  return (
    <main className="container p-6 bg-pink-950">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="text-white">
        <p><strong>Name:</strong> {user.displayName || "Anonymous"}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </main>
  );
};

export default Profile;
