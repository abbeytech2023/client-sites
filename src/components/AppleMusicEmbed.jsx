export default function AppleMusicEmbed({ embedUrl }) {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      <iframe
        title="Apple Music Player"
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        className="w-full h-[220px] sm:h-[250px] md:h-[300px]"
        src={embedUrl}
      ></iframe>
    </div>
  );
}
