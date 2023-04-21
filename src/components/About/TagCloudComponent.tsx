import {useTagCloud} from "../../hooks/useTagCloud";

const TagCloudComponent = () => {
  const containerRef = useTagCloud()

  return <span ref={containerRef} />
};

export default TagCloudComponent;