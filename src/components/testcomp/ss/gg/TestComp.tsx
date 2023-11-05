import SampleComp from '@/components/SampleComp';

type Props = {
  name: string;
};

export default function TestComp(params: Props) {
  return (
    <>
      Test comp: props.name: {params.name}
      <SampleComp name="SampleCom" />
    </>
  );
}
