const testing = require('./fetchApi');

describe('Function fetchDogApi async/await.', () => {
  const mockFetchDogApi = jest.spyOn(testing, 'fetchDogApi');
  afterEach(mockFetchDogApi.mockReset());

  it('Should return an object when resolves. ', async () => {
    mockFetchDogApi.mockImplementation(() => Promise.resolve({ message: 'hi', status: 'success'}));
    mockFetchDogApi.mockResolvedValue('request success');
    
    await mockFetchDogApi();
    expect(mockFetchDogApi).toHaveBeenCalled();
    expect(mockFetchDogApi).toHaveBeenCalledTimes(1);
    expect(mockFetchDogApi()).resolves.toBe('request success');
    expect(mockFetchDogApi).toHaveBeenCalledTimes(2);
  });

  it('Should return an error when rejects. ', async () => {
    mockFetchDogApi.mockImplementation(() => Promise.reject({ message: 'hi', status: 'success'}));
    mockFetchDogApi.mockRejectedValue('request fails');
    
    await mockFetchDogApi();
    expect(mockFetchDogApi).toHaveBeenCalled();
    expect(mockFetchDogApi).toHaveBeenCalledTimes(1);
    expect(mockFetchDogApi()).reject.toBe('request fails');
    expect(mockFetchDogApi).toHaveBeenCalledTimes(2);
  });
});