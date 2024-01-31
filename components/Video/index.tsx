const Video = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  return (
    // width={width} height={height} 
    <div className="rounded-xl overflow-hidden border-white shadow-lg shadow-gray-300 dark:shadow-gray-900 aspect-w-16 aspect-h-9 w-full">
      <iframe src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
};

export default Video;