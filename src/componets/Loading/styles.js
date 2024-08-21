import styled from 'styled-components';

export const Content = styled.div`

.loading{
    width: 100%;
    font-size: 2rem;
    margin: 200px auto 0;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from{
      transform: rotate(0deg) ;
    }
    to{
        transform: rotate(360deg);
    }
}

`