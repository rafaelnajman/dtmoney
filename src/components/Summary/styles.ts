import styled from "styled-components";

type Props = {
  total: number;
};

export const Container = styled.div.attrs((props: Props) => ({
  total: props.total,
}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
      display: block;
    }

    &.Highlight-background {
      background: ${(props) =>
        props.total > 0 ? "var(--green)" : "var(--red)"};
      color: #fff;
    }
  }
`;
