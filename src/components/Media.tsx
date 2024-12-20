import SectionContainer from './sections/SectionContainer';
import VideoGrid from './media/VideoGrid';
import SubscribeButton from './media/SubscribeButton';

export default function Media() {
  const videos = [
    {
      id: 'video1',
      title: 'Puwacha Nipucha × Asaraya Sina Jya ǀ Newari Folk Song ǀ Instrumental Cover ǀ Shree Bhairab',
      embedId: <iframe width="560" height="315" src="https://www.youtube.com/embed/uOVzqqKgd9g?si=QJVxVCZRdk1ustSx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    {
      id: 'video2',
      title: 'Behind the Scenes',
      embedId: 'uOVzqqKgd9g'
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
