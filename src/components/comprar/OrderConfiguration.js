import { ChevronDownIcon, TagIcon } from 'lucide-react';

const OrderConfiguration = ({ price, name, imageUrl, normalPrice }) => {
    const desconto = parseFloat(normalPrice) - parseFloat(price);



    return (
        <div className="max-w-3xl mx-auto bg-white  overflow-hidden">
            <h2 className="text-xl font-medium p-4 ">Configure o seu pedido</h2>

            <div className="p-4">
                <div className="bg-emerald-500 text-white p-2 rounded-t-lg flex items-center justify-center">
                    <TagIcon className="w-5 h-5 mr-2" />
                    <span className="font-extralight text-sm">Preço especial</span>
                </div>

                <div className="flex items-center p-4 bg-white rounded-b-lg border border-t-0 border-gray-200">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-24 h-auto mr-6"
                    />
                    <div className="flex-grow flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row sm:flex-row justify-between">
                        <div className='flex flex-col '>
                            <h3 className="text-lg font-medium mb-2">{name}</h3>
                            <div className=''>
                            <span className='text-[0.6rem]' >Preço:</span>
                                <p className="text-gray-500 text-xs ">
                                    <s>R$: {normalPrice}</s>
                                    
                                </p>
                            </div>
                          
                            <span className=''></span>
                            <div className='mt-4'>
                                <span className='text-[0.6rem]' >Você Paga:</span>
                                <p className='text-xl font-semibold font-inter  '>R$: {price}
                                
                                </p>
                            </div>
                            
                        </div>
                        <div className="max-w-xs">
                            <label htmlFor="quantity" className="block text-sm font-extralight text-gray-700 mb-1">
                                Quantidade:
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="quantity"
                                    name="quantity"
                                    value="1 unidade"
                                    disabled
                                    className="block w-full rounded-md border-gray-300 bg-gray-100 py-2 pl-3 pr-10 text-gray-500 focus:border-gray-300 focus:outline-none focus:ring-0 sm:text-sm"
                                    readOnly
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfiguration;