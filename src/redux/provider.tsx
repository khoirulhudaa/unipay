'use client'

import React, { ReactNode, Suspense } from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import LoadingFallback from '@/components/loading';
import { PersistGate } from 'redux-persist/integration/react';

interface ProviderProps {
  children: ReactNode
}

const ProviderMain: React.FC<ProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<LoadingFallback/>}>
          {children}
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

export default ProviderMain
