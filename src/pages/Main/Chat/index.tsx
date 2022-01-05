import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import Footer from './Footer';
import s from './style.module.scss';

function Chat() {
  return (
    <div className={s.root}>
      <Header />
      <MessageList />
      <Footer />
    </div>
  );
}

export default Chat;
