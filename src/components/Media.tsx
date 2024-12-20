import SectionContainer from './sections/SectionContainer';
import VideoGrid from './media/VideoGrid';
import SubscribeButton from './media/SubscribeButton';

export default function Media() {
  const videos = [
    {
      id: 'video1',
      title: 'Puwacha Nipucha × Asaraya Sina Jya ǀ Newari Folk Song ǀ Instrumental Cover ǀ Shree Bhairab',
      embedId: 'uOVzqqKgd9g'
    },
    {
      id: 'video2',
      title: 'Salugu Gacha । Sirsaya Hegu । Aila Luwaya । Mashup Song । Shardul Jung Gulma (Gurju Paltan)',
      embedId: 'B0oMn8t4xDE'
    },
    {
      id: 'video3',
      title: 'Wo Chu Galli Tho Chu Galli Cover • Shree Bhairab',
      embedId: 'HNZK08QlH_0'
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
