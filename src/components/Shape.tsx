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

// export const ShapeTriangle = ({
//   width,
//   height,
//   src,
//   className,
//   fill,
// }: ShapesProps) => {
//   return (
//     <div className={`absolute ${className}`}>
//       <Image
//         fill={fill}
//         src={src}
//         width={width}
//         height={height}
//         alt="triangle"
//       />
//     </div>
//   );
// };

// export const ShapeHexagon = ({
//   width,
//   height,
//   src,
//   className,
// }: ShapesProps) => {
//   return (
//     <Image
//       className={`${className} absolute`}
//       width={width}
//       height={height}
//       src={src}
//       alt="triangle"
//     />
//   );
// };

export default Shape;
