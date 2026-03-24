interface GoogleFormEmbedProps {
  formUrl: string;
  title: string;
  height?: number;
}

export default function GoogleFormEmbed({ formUrl, title, height = 3000 }: GoogleFormEmbedProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white">
      <iframe
        src={formUrl}
        title={title}
        width="100%"
        height={height}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        loading="lazy"
        className="w-full"
      >
        Loading...
      </iframe>
    </div>
  );
}
