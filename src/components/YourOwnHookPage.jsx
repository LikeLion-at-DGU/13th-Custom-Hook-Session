import { useErasebtn } from "../hooks/useErasebtn";

export const YourOwnHookPage = () => {
   const { erase,toggleErase } = useErasebtn(true);
  
  return (
    <div>
          {erase ? <div>안녕</div> : null}
          <button onClick={toggleErase}>눌러보기</button>
    </div>
  );
};
