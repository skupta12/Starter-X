import Image from "next/image";

type ShapesProps = {
  width?: number;
  height?: number;
  className?: string;
  src: string;
  fill: boolean;
};

export const ShapeSquare = ({
  width,
  height,
  src,
  className,
  fill,
}: ShapesProps) => {
  return (
    <div className={`absolute ${className}`}>
      <Image
        fill={fill}
        src={src}
        width={width}
        height={height}
        alt="square"
      />
    </div>
  );
};

export const ShapeTriangle = ({
  width,
  height,
  src,
  className,
  fill,
}: ShapesProps) => {
  return (
    <div className={`absolute ${className}`}>
      <Image
        fill={fill}
        src={src}
        width={width}
        height={height}
        alt="triangle"
      />
    </div>
  );
};

export const ShapeHexagon = ({
  width,
  height,
  src,
  className,
}: ShapesProps) => {
  return (
    <Image
      className={`${className} absolute`}
      width={width}
      height={height}
      src={src}
      alt="triangle"
    />
  );
};

export default ShapeSquare;
