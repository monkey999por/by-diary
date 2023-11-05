type Props = {
  name: string;
};

export default function SampleComp(params: Props) {
  return (
    <>
      <button className=" border border-gray-300 bg-current">
        {params.name}
      </button>
    </>
  );
}
