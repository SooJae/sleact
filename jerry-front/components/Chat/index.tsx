import React, { VFC } from 'react';
import { IDM } from '@typings/db';
import { ChatWrapper } from '@components/Chat/styles';
import gravatar from 'gravatar';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';

interface Props {
  data: IDM;
}

const Chat: VFC<Props> = ({ data }) => {
  const user = data.Sender;
  // @[이수재](1)
  const result = regexifyString({
    input: data.content,
    pattern: /@\[.+?\]\(\d+?\)|\n]/g,
    decorator(match, index) {
      const arr = match.match();
    },
  });

  return (
    <ChatWrapper>
      <div className="chat-img">
        <img
          src={gravatar.url(user.email, {
            s: '36px',
            d: 'retro',
          })}
          alt={user.nickname}
        />
        <div className="chat-text">
          <div className="chat-user">
            <b>{user.nickname}</b>
            <span>{dayjs(data.createdAt).format('h:mm A')}</span>
          </div>
          <p>{result}</p>
        </div>
      </div>
    </ChatWrapper>
  );
};

export default Chat;
