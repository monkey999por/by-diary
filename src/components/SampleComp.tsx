type Props = {
  name: string;
};

export default function SampleComp(params: Props) {
  return <>Sample comp: props.name: {params.name}</>;
}
