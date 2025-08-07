import { useParams } from "react-router-dom";
import * as S from "./DetailPage.styles";

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // TODO: id에 따라 API로 문서 내용 가져오는 로직 연결

  return (
    <S.Container>
      <S.Title>📄 문서 상세보기</S.Title>
      <S.Content>
        <p>
          <strong>문서 ID:</strong> {id}
        </p>
        <p>이곳에 문서 내용을 렌더링합니다.</p>
      </S.Content>
    </S.Container>
  );
};
