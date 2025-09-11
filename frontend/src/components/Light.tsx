export const Light = ({
  positionX,
  positionY="top-32",
  fromColor,
  toColor,
  rotation,
  width,
  height,
}: {
  positionX: string;
  positionY?: string;
  fromColor: string;
  toColor: string;
  rotation: string;
  width: string;
  height: string;
}) => {
  return (
    <div
      className={`absolute ${positionX} ${positionY} ${rotation} ${width} ${height} rounded-3xl opacity-15 bg-gradient-to-r ${fromColor} ${toColor} blur-3xl pointer-events-none`}
    />
  );
};
