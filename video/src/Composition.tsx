import { AbsoluteFill, CalculateMetadataFunction, Composition } from "remotion";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={60}
      fps={30}
      width={1280}
      height={720}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const MyComponent: React.FC<Props> = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#101827",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: 80,
      }}
    >
      Welcome to Remotion
    </AbsoluteFill>
  );
};
