// src/components/Player.tsx
import React from 'react';
import ReactPlayer from 'react-player';
import { Channel } from '../utils/m3uParser';

interface PlayerProps {
  channel: Channel;
}

const Player: React.FC<PlayerProps> = ({ channel }) => {
  return (
    <div>
      <h2>Now Playing: {channel.title}</h2>
      <ReactPlayer url={channel.url} controls playing />
    </div>
  );
};

export default Player;
