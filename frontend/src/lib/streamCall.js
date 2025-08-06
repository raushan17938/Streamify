// Utility to get/create a 1-1 channel and send a custom event (call request)
import { StreamChat } from 'stream-chat';

/**
 * Send a call request event to a user via a 1-1 channel
 * @param {StreamChat} client - The StreamChat client instance
 * @param {string} currentUserId - The current user's id
 * @param {string} friendId - The friend's user id
 */
export async function sendCallRequestEvent(client, currentUserId, friendId) {
  // Get or create a unique 1-1 channel
  const channel = client.channel('messaging', {
    members: [currentUserId, friendId],
  });
  await channel.watch();
  // Send the custom event
  await channel.sendEvent({
    type: 'call:request',
    user: { id: currentUserId },
    created_at: new Date().toISOString(),
  });
}
