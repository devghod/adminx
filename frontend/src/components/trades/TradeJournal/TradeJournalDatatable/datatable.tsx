'use client';

import { useState, useMemo, useEffect } from 'react';
import { TTradeJournals } from '@/stores/tradeStore/type';
import { useTradeStore } from '@/stores/tradeStore';
import { columns, columnHelper } from './constants';
import { Button } from '@/components/ui/button';
import {
  AddIcon,
  EditIcon,
  ReloadIcon,
  TrashIcon,
  ViewIcon,
} from '@/components/ui/icons';
import { ToolTip } from '@/components/ui/tooltips';
import { Datatable } from '@/components/Datatable';
import {
  DialogMenu,
  DialogMenuClose,
  DialogMenuDescription,
  DialogMenuTitle,
} from '@/components/ui/dialog';
import CreateUpdateTradeJournal from '@/features/trade/tradejournal/createUpdate/form';
import DeleteTradeJournal from '@/features/trade/tradejournal/delete/form';

const TradeJournalDatatable = () => {
  const {
    tradeJournals,
    size,
    page,
    filters,
    totalTradeJournals,
    isLoading,
    getTradeJournalsPaginated: fetchTradeJournals,
    setSize,
    setPage,
    setFilters,
  } = useTradeStore();

  const [journaltData, setJournalData] = useState({});
  const [openCreateUpdate, setOpenCreateUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [setPage]);

  const tableData: any = useMemo(() => {
    if (tradeJournals.length === 0) return [];
    return tradeJournals;
  }, [tradeJournals]);

  const tableColumns = useMemo(
    () => [
      ...columns,
      columnHelper.display({
        id: 'actions',
        cell: (props: any) => (
          <div className='flex justify-end rounded-md gap-1'>
            <ToolTip title='Details' className='text-xs'>
              <Button
                theme='fill-info'
                shape='rounded'
                size='xs'
                onClick={() => handleDetails(props.row.original)}
              >
                <ViewIcon />
              </Button>
            </ToolTip>
            <ToolTip title='Edit' className='text-xs'>
              <Button
                theme='fill-primary'
                shape='rounded'
                size='xs'
                onClick={() => handleCreateUpdate(props.row.original)}
              >
                <EditIcon />
              </Button>
            </ToolTip>
            <ToolTip title='Delete' className='text-xs'>
              <Button
                theme='fill-danger'
                shape='rounded'
                size='xs'
                onClick={() => handleDelete(props.row.original)}
              >
                <TrashIcon />
              </Button>
            </ToolTip>
          </div>
        ),
        size: 50,
      }),
    ],
    [],
  );

  const handleCreateUpdate = (data = {}): any => {
    setOpenCreateUpdate(true);
    setJournalData(data);
  };

  const handleDelete = (data = {}): any => {
    setOpenDelete(true);
    setJournalData(data);
  };

  const handleDetails = (data = {}): any => {
    setOpenDetail(true);
    setJournalData(data);
  };

  return (
    <>
      <div className='gap-x-3 flex'>
        <Button
          theme='fill-success'
          shape='rounded'
          size='sm'
          onClick={() => fetchTradeJournals(page, size, filters)}
          isLoading={isLoading}
        >
          <ReloadIcon />
        </Button>

        <Button
          theme='fill-primary'
          shape='rounded'
          size='sm'
          onClick={() => handleCreateUpdate()}
          disabled={isLoading}
          className='pr-3'
        >
          <AddIcon />
          Entry
        </Button>
      </div>

      <Datatable
        rowData={tableData as TTradeJournals}
        columnData={tableColumns}
        isLoading={isLoading}
        size={size}
        page={page}
        total={totalTradeJournals}
        fnQuery={fetchTradeJournals}
        fnSetSize={setSize}
        fnSetFilters={setFilters}
        searchBar
        shadow
        hasBorder
      />

      <CreateUpdateModal
        open={openCreateUpdate}
        onOpenChange={setOpenCreateUpdate}
        data={journaltData}
      />

      <DeleteDialog
        open={openDelete}
        onOpenChange={setOpenDelete}
        data={journaltData}
      />

      <DetailModal
        open={openDetail}
        onOpenChange={setOpenDetail}
        details={journaltData}
      />
    </>
  );
};

export default TradeJournalDatatable;

const CreateUpdateModal = ({
  open = false,
  onOpenChange,
  data = {},
}: {
  open?: boolean;
  onOpenChange?: any;
  data?: any;
}) => (
  <DialogMenu open={open} onOpenChange={onOpenChange} modal>
    <DialogMenuTitle>
      {data && data?._id ? 'Edit' : 'Create'} Entry
    </DialogMenuTitle>
    <DialogMenuClose closeIcon />
    <DialogMenuDescription asChild>
      <CreateUpdateTradeJournal data={data} onClose={onOpenChange} />
    </DialogMenuDescription>
  </DialogMenu>
);

const DeleteDialog = ({
  open = false,
  onOpenChange,
  data = {},
}: {
  open?: boolean;
  onOpenChange?: any;
  data?: any;
}) => (
  <DialogMenu
    open={open}
    onOpenChange={onOpenChange}
    className='w-96'
  >
    <DialogMenuTitle>Delete Account</DialogMenuTitle>
    <DialogMenuDescription asChild>
      <DeleteTradeJournal data={data} onClose={onOpenChange} />
    </DialogMenuDescription>
  </DialogMenu>
);

const DetailModal = ({
  open = false,
  onOpenChange,
  details,
}: {
  open?: boolean;
  onOpenChange?: any;
  details?: any;
}) => (
  <DialogMenu open={open} onOpenChange={onOpenChange} modal>
    <DialogMenuTitle>Details Account</DialogMenuTitle>
    <DialogMenuClose closeIcon />
    <DialogMenuDescription asChild>
      <pre>{JSON.stringify(details, null, 2)}</pre>
    </DialogMenuDescription>
  </DialogMenu>
);
