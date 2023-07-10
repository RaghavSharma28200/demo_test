import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const chatClient = new StreamChat('crxdfpwcaubt');
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic2lsZW50LWZpZWxkLTUifQ.RQ2IkXWHWtlaV2z4is0btBxbpbWYJwTslDQPY19JZTI';

chatClient.connectUser(
  {
    id: 'silent-field-5',
    name: 'silent-field-5',
    image: 'https://getstream.io/random_png/?id=silent-field-5&name=silent-field-5',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['silent-field-5'],
});

const Chat2 = () => (
  <Chat client={chatClient} theme='str-chat__theme-light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default Chat2;
