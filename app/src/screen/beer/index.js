import { useEffect, useState } from 'react';
import { useBeer } from '../../hook/beer';
import Loading from '../../component/loading/Loading';
import Error from '../../component/error/Error';
import Wrapper from '../../component/wrapper/Wrapper';
import Card from '../../component/card/Card';
import Button from '../../component/button/Button';
import './index.css';


const RandomBeer = () => {
    const { loading, error, info, randomBeer, previous, getPreviousBeer, addPreviousBeer } = useBeer();
    const [showJSON, setShowJSON] = useState(false);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        randomBeer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderDetail = () => {
        return (
            <div>
                <p><span className='bold_text'>style:</span> {info?.style}</p>
                <p><span className='bold_text'>hop:</span> {info?.hop}</p>
                <p><span className='bold_text'>yeast:</span> {info?.yeast}</p>
                <p><span className='bold_text'>malts:</span> {info?.malts}</p>
                <p><span className='bold_text'>ibu:</span> {info?.ibu}</p>
                <p><span className='bold_text'>alcohol:</span> {info?.alcohol}</p>
                <p><span className='bold_text'>blg:</span> {info?.blg}</p>
            </div>
        )
    };

    const copyJSON = () => {
        navigator.clipboard.writeText(JSON.stringify(info));
        setAlert(true);
        setTimeout(() => setAlert(false), 1300);
    };

    const clickRandom = () => {
        addPreviousBeer(info);
        randomBeer();
    };

    return (
        <>
            <Loading show={loading} />
            {error && (<Error message={error} />)}
            <div className='title flex_center'>
                <h1>Beer</h1>
            </div>
            {
                alert && (
                    <div className='alert_wrapper'>
                        <div className='alert'>Copied to clipboard!</div>
                    </div>
                )
            }
            {
                showJSON ? (
                    <Wrapper>
                        <Card
                            detail={(<pre style={{ overflowX: "overlay" }}>
                                {JSON.stringify(info, undefined, 2)}
                            </pre>)}
                            actions={[
                                (<Button key="copy" onClick={() => copyJSON()} >Copy</Button>),
                                (<Button key="info" primary onClick={() => setShowJSON(false)} >Info</Button>)
                            ]}
                        />
                    </Wrapper>
                ) : (
                    <Wrapper>
                        <Card
                            tagTop={info?.uid}
                            tagBottom={info?._id}
                            badge={info?.randomCount}
                            title={info?.name}
                            subtitle={info?.brand}
                            detail={renderDetail()}
                            actions={[
                                (<Button key="json" primary onClick={() => setShowJSON(true)} >JSON</Button>)
                            ]}
                        />
                    </Wrapper>
                )
            }


            <div className='flex_center'>
                <Button style={{ marginRight: "10px" }} disabled={previous.length <= 0} onClick={() => getPreviousBeer()}>Previous</Button>
                <Button primary onClick={() => clickRandom()}>Random</Button>
            </div>
        </>
    )
};

export default RandomBeer;