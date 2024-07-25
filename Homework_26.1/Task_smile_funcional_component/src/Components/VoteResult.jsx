function VoteResult(props)  {
    const { imgName, winnerCounter } = props;
        return (
            <div className='d-flex align-items-center flex-column mt-5 gap-4'>
                <h2 className='fw-bold'>Результати голосування</h2>
                <span className='fw-bold'>Переможець</span>
                <img src={imgName} alt="Winner"/>
                <span className='fw-bold'>Кількість голосів:{winnerCounter}</span>
            </div>
        );
}
export default VoteResult