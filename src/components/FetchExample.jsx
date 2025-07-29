import { useFetch } from "../hooks/apis/useFetch";

export const FetchExample = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/2"
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>useFetch 예제</h2>

      {loading && <p>로딩 중...</p>}
      {error && <p style={{ color: "red" }}>오류 발생: {error}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};
