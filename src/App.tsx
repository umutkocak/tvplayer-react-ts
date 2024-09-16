// src/App.tsx
import React, { useState } from 'react';
import ChannelList from './components/ChannelList';
import Player from './components/Player';
import { parseM3U, Channel } from './utils/m3uParser';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUrl(e.target.value);

  const handleFetchChannels = async () => {
    const parsedChannels = await parseM3U(url);
    setChannels(parsedChannels);
  };

  const handleChannelSelect = (channel: Channel) => setSelectedChannel(channel);

  return (
    <div>
      <h1>IPTV Player</h1>
      <input
        type="text"
        placeholder="Enter IPTV M3U URL"
        value={url}
        onChange={handleUrlChange}
      />
      <button onClick={handleFetchChannels}>Fetch Channels</button>

      {channels.length > 0 && (
        <ChannelList channels={channels} onSelect={handleChannelSelect} />
      )}

      {selectedChannel && <Player channel={selectedChannel} />}
    </div>
  );
};

export default App;
