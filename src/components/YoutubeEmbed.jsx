export default function YouTubeEmbed({ videoId }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}
