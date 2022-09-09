import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {TX} from "../dto/Transaction";
import TXs from "../data/csvjson.json";
import {useRouter} from "next/router";

const TxComponent: React.FC = () => {
    const [txs, setTxs] = useState<Array<TX>>([])
    const [hasNextPage, setNextPage] = useState(true)
    const router = useRouter();


    useEffect(() => {
        fetchTxs(20)
    }, [])


    const fetchTxs = async (limit = 10) => {
        const data = TXs.slice(txs.length, txs.length + limit)
        setTxs(txs.concat(data))
        setNextPage(txs.length !== TXs.length)
    }

    return (
        <div className="overflow-x-auto">
            <InfiniteScroll
                dataLength={txs.length}
                next={fetchTxs}
                hasMore={hasNextPage}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                <div
                    className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center  font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6 my-6">
                        <button
                            onClick={()=>router.push("/balance")}
                            className="bg-yellow-600 max-h-10 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded my-6">
                            check your balance
                        </button>
                        <table className="min-w-max w-full table-fixed">
                            <thead>
                            <tr className="bg-gray-600 text-gray-100 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">TxHash</th>
                                <th className="py-3 px-6 text-left">From</th>
                                <th className="py-3 px-6 text-center">To</th>
                                <th className="py-3 px-6 text-center">Value</th>
                                <th className="py-3 px-6 text-center">TxFee</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-300 bg-gray-800 text-sm font-light">
                            {txs.map((el) => (
                                <tr key={el.Txhash}
                                    className="border-b border-yellow-200 hover:bg-yellow-100 hover:text-gray-800">
                                    <td className="py-3 px-6 text-left truncate hover:text-clip">
                                        {el.Txhash}
                                    </td>
                                    <td className="py-3 px-6 text-left truncate hover:text-clip">
                                        {el.From}
                                    </td>
                                    <td className="py-3 px-6 text-center truncate hover:text-clip">
                                        {el.To}
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        {Math.ceil(el["Value_IN(ETH)"] * 100) / 100} ETH
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        {Math.ceil(el["TxnFee(USD)"] * 100) / 100} USD
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default TxComponent;
