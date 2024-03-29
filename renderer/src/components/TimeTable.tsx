import { Container } from '@/common/Container';
import { Line } from '@/common/Line';
import { Table } from '@/common/Table';
import { TextBox } from '@/common/TextBox';
import { TYPO, WEIGHT } from '@/common/theme';
import { MetadataContext } from '@/context/MetadataContext';
import { ITable, Metadata } from '@/types';
import { useContext } from 'react';

interface TimeTableProps extends ITable {
  metadata?: Metadata;
}

export function TimeTable(props: TimeTableProps) {
  const metadata = useContext(MetadataContext);
  const { cols, rows, data } = props;
  const { cleaning_group: cleaner, snack } = metadata;
  const metadataJoined = [
    snack ? `간식: ${snack}` : undefined,
    cleaner ? `청소: ${cleaner}` : undefined,
  ].filter(e=>e?.trim()).join(' / ');

  return (
    <Container width={'90%'} extendedStyle={{ marginTop: 20 }}>
      {/* <Line extendedStyle={{ marginBottom: 20 }} /> */}
      <TextBox size={TYPO.h1} extendedStyle={{ fontWeight: 700 }}>
        일정 안내
      </TextBox>
      <Table isPrimary={(idx) => idx < cols} data={data} />
      <TextBox
        size={TYPO.xs}
        extendedStyle={{ width: '90%', textAlign: 'end', marginTop: 8 }}
      >
        {metadataJoined}
      </TextBox>
    </Container>
  );
}
