import SectionContainer from './sections/SectionContainer';
import VideoGrid from './media/VideoGrid';
import SubscribeButton from './media/SubscribeButton';

export default function Media() {
  const videos = [
    {
      id: 'video1',
      title: 'Live at Symphony Hall',
      embedId: 'YOUR_YOUTUBE_VIDEO_ID_1'
    },
    {
      id: 'video2',
      title: 'Behind the Scenes',
      embedId: 'YOUR_YOUTUBE_VIDEO_ID_2'
    },
    {
      id: 'video3',
      title: 'Summer Concert Highlights',
      embedId: 'YOUR_YOUTUBE_VIDEO_ID_3'
    }
  ];

  return (
    <SectionContainer 
      id="media" 
      className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-900">
        Media
      </h2>
      
      <div className="space-y-12">
        <VideoGrid videos={videos} />
        <div className="text-center">
          <SubscribeButton />
        </div>
      </div>
    </SectionContainer>
  );
}