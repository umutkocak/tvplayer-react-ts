// src/utils/m3uParser.ts
import axios from 'axios';
import { Parser } from 'm3u8-parser';

// Kanal verileri için bir arayüz tanımlıyoruz
export interface Channel {
  title: string;
  url: string;
}

export const parseM3U = async (url: string): Promise<Channel[]> => {
  try {
    const response = await axios.get(url);
    const parser = new Parser();
    parser.push(response.data);
    parser.end();

    // M3U'dan kanal bilgilerini çekiyoruz
    const playlist = parser.manifest;
    const channels: Channel[] = playlist.segments.map((segment: any) => ({
      title: segment.title || 'Unnamed Channel',
      url: segment.uri,
    }));

    return channels;
  } catch (error) {
    console.error('Error parsing M3U:', error);
    return [];
  }
};
