import { PropType } from 'vue';

import { ActionContext } from 'vuex';

type ComponentProps<T = unknown> = {
  type: PropType<T>;
  required: boolean;
  default: unknown;
};

export type SearchInputFieldProps = {
  label: ComponentProps<string>;
  loading: ComponentProps<boolean>;
};

export type ExchangeOptionInputProps = {
  options: ComponentProps<string[]>;
};

export type SkeletonLoaderProps = {
  type: ComponentProps<string | string[]>;
  width: ComponentProps<string | string[]>;
  height: ComponentProps<string | string[]>;
  repeat: ComponentProps<boolean>;
};

export type StatisticsItemProps = {
  longLabel: ComponentProps<string>;
  shortLabel: ComponentProps<string>;
  value: ComponentProps<string>;
};

export type Payload = {
  stockSymbol: string;
  stockExchange: string;
  modules: string;
};

type StockStatisticsProps = {
  raw: number;
  fmt: string;
  longFmt?: string;
};

export type StockOverview = {
  quoteSummary: {
    result: [
      {
        assetProfile: {
          city: string;
          state: string;
          country: string;
          industry: string;
          sector: string;
          longBusinessSummary: string;
        };
        quoteType: {
          exchange: string;
          longName: string;
          quoteType: string;
          shortName: string;
          symbol: string;
          timeZoneFullName: string;
          timeZoneShortName: string;
          uuid: string;
        };
        defaultKeyStatistics: {
          '52WeekChange': StockStatisticsProps;
          enterpriseValue: StockStatisticsProps;
          forwardPE: StockStatisticsProps;
          profitMargins: StockStatisticsProps;
          floatShares: StockStatisticsProps;
          sharesOutstanding: StockStatisticsProps;
          bookValue: StockStatisticsProps;
          priceToBook: StockStatisticsProps;
          netIncomeToCommon: StockStatisticsProps;
          trailingEps: StockStatisticsProps;
          pegRatio: StockStatisticsProps;
          enterpriseToRevenue: StockStatisticsProps;
          enterpriseToEbitda: StockStatisticsProps;
          lastDividendValue: StockStatisticsProps;
          lastSplitDate: StockStatisticsProps;
          lastSplitFactor: string | number;
        };
        financialData: {
          financialCurrency: string;
          currentPrice: StockStatisticsProps;
          ebitda: StockStatisticsProps;
          totalRevenue: StockStatisticsProps;
          revenueGrowth: StockStatisticsProps;
          revenuePerShare: StockStatisticsProps;
          returnOnAssets: StockStatisticsProps;
          returnOnEquity: StockStatisticsProps;
          grossProfits: StockStatisticsProps;
        };
      }
    ];
  };
};

export type StockOverviewState = {
  isLoading: boolean;
  isFetched: boolean;
  error: any;
  stockOverview: StockOverview;
};

export type StockOverviewGetters = {
  isLoading: (state: StockOverviewState) => boolean;
  isFetched: (state: StockOverviewState) => boolean;
  error: (state: StockOverviewState) => any;
  stockOverview: (state: StockOverviewState) => StockOverview;
};

export type StockOverviewMutations = {
  setIsLoading: (state: StockOverviewState, payload: boolean) => void;
  setIsFetched: (state: StockOverviewState, payload: boolean) => void;
  setError: (state: StockOverviewState, payload: boolean) => void;
  setStockOverview: (state: StockOverviewState, payload: StockOverview) => void;
};

export type StockOverviewActions = {
  fetchStockOverview: (
    context: ActionContext<StockOverview, unknown>,
    payload: Payload
  ) => void;
};
