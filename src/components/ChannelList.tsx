// src/components/ChannelList.tsx
import React from 'react';
import { Channel } from '../utils/m3uParser';

interface ChannelListProps {
  channels: Channel[];
  onSelect: (channel: Channel) => void;
}

const ChannelList: React.FC<ChannelListProps> = ({ channels, onSelect }) => {
  return (
    <div>
      <h2>Available Channels</h2>
      <ul>
        {channels.map((channel, index) => (
          <li key={index}>
            <button onClick={() => onSelect(channel)}>{channel.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
