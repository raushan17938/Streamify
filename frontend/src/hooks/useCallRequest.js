import { useChatContext } from 'stream-chat-react';
import useAuthUser from '../hooks/useAuthUser';
import { sendCallRequestEvent } from '../lib/streamCall';
import { toast } from 'react-hot-toast';

/**
 * Custom hook to handle sending a call request via Stream
 * Usage: const handleConnect = useCallRequest(friend._id)
 */
export function useCallRequest(friendId) {
  const { client } = useChatContext();
  const { authUser } = useAuthUser();

  const handleConnect = async () => {
    try {
      await sendCallRequestEvent(client, authUser._id, friendId);
      toast.success('Calling...');
    } catch (err) {
      toast.error('Failed to send call request');
    }
  };

  return handleConnect;
}
