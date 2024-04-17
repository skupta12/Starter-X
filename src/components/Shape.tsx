import Image from "next/image";

type ShapesProps = {
  width?: number;
  height?: number;
  className?: string;
  src: string;
  fill: boolean;
  alt: string;
};

export const Shape = ({
  width,
  height,
  src,
  className,
  fill,
  alt,
}: ShapesProps) => {
  return (
    <div className={`absolute ${className}`}>
      <Image
        fill={fill}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default Shape;
